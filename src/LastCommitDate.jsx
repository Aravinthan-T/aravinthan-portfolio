import { useEffect, useState } from "react";

const LastCommitDate = () => {
  const [lastCommitDate, setLastCommitDate] = useState(null);
  const [lastCommitMsg, setLastCommitMsg] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/Aravinthan-T/aravinthan-portfolio/commits?per_page=1`
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();

        if (data.length > 0) {
          setLastCommitDate(new Date(data[0].commit.author.date));
          setLastCommitMsg(data[0]?.commit.message);
        } else {
          setLastCommitDate("No commits yet");
          setLastCommitMsg("Commit message not found");
        }
      } catch (err) {
        setError(err, "Unable to fetch commit date");
      }
    };

    fetchLastCommit();
  }, []);

  if (error) return <p>{error}</p>;
  if (!lastCommitDate && !lastCommitMsg) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <p>
          Last commit on:{" "}
          <strong>
            {typeof lastCommitDate === "string"
              ? lastCommitDate
              : lastCommitDate.toLocaleDateString()}
          </strong>
        </p>
      </div>
      <div>
        <p>
          Last commit message: <strong>{lastCommitMsg}</strong>
        </p>
      </div>
    </div>
  );
};

export default LastCommitDate;
