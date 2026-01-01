import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import { data } from "../data";
import "../../styles/CamsOnline.css";

const CamsOnline = () => {
  const [filter, setFilter] = useState("1_week");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [dateError, setDateError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const todayStr = new Date().toISOString().split("T")[0];

  const applyFilter = () => {
    const today = new Date();
    let fromDate;

    if (filter === "1_week") {
      fromDate = new Date();
      fromDate.setDate(today.getDate() - 7);
    } else if (filter === "1_month") {
      fromDate = new Date();
      fromDate.setMonth(today.getMonth() - 1);
    } else if (filter === "3_month") {
      fromDate = new Date();
      fromDate.setMonth(today.getMonth() - 3);
    }

    const result = data.filter((item) => {
      const itemDate = new Date(item.date);

      if (filter === "custom") {
        if (!startDate || !endDate) return false;
        if (itemDate < new Date(startDate) || itemDate > new Date(endDate)) {
          return false;
        }
      } else {
        if (itemDate < fromDate || itemDate > today) {
          return false;
        }
      }

      if (appliedSearch) {
        const search = appliedSearch.toLowerCase();
        return (
          item.provider.toLowerCase().includes(search) ||
          item.name.toLowerCase().includes(search) ||
          item.amount.toString().includes(search)
        );
      }

      return true;
    });

    setFilteredData(result);
  };

  useEffect(() => {
    applyFilter();
  }, [filter, appliedSearch]);

  return (
    <Card className="p-3">
      <h4 className="mb-3">Mutual Fund Transactions</h4>

      <Form className="mb-3">
        <Row className="align-items-end">
          <Col md={3}>
            <Form.Group>
              <Form.Label>Filter</Form.Label>
              <Form.Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="1_week">Last 1 Week</option>
                <option value="1_month">Last 1 Month</option>
                <option value="3_month">Last 3 Months</option>
                <option value="custom">Custom</option>
              </Form.Select>
            </Form.Group>
          </Col>

          {filter === "custom" && (
            <>
              <Col md={3}>
                <Form.Group>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    max={todayStr}
                    value={startDate}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value > todayStr) {
                        setDateError("Start date cannot be greater than today");
                        return;
                      }

                      if (endDate && value > endDate) {
                        setDateError(
                          "Start date cannot be greater than end date"
                        );
                        return;
                      }

                      setDateError("");
                      setStartDate(value);
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    max={todayStr}
                    value={endDate}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value > todayStr) {
                        setDateError("End date cannot be greater than today");
                        return;
                      }

                      if (startDate && value < startDate) {
                        setDateError("End date cannot be less than start date");
                        return;
                      }

                      setDateError("");
                      setEndDate(value);
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={2}>
                <Button
                  onClick={applyFilter}
                  disabled={!!dateError || !startDate || !endDate}
                  className="search-button"
                >
                  Apply
                </Button>
              </Col>

              {dateError && (
                <Row className="mt-2">
                  <Col>
                    <div style={{ color: "red", fontSize: "14px" }}>
                      {dateError}
                    </div>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Row>
      </Form>

      <Row className="mb-3">
        <Col md={10}>
          <Form.Control
            type="text"
            placeholder="Search by Provider, Fund Name or Amount"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar mt-2"
          />
        </Col>

        <Col md={2}>
          <Button
            className="search-button"
            onClick={() => setAppliedSearch(searchTerm)}
          >
            Search
          </Button>
        </Col>
      </Row>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Provider</th>
            <th>Fund Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.provider}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default CamsOnline;
