import React from "react";

const marksData = [
  { range: "97 – 100", grade: "A+", points: "4.0", description: "Exceptional" },
  { range: "93 – 96",  grade: "A",  points: "4.0", description: "Excellent" },
  { range: "90 – 92",  grade: "A-", points: "3.7", description: "Excellent" },
  { range: "87 – 89",  grade: "B+", points: "3.3", description: "Very Good" },
  { range: "83 – 86",  grade: "B",  points: "3.0", description: "Good" },
  { range: "80 – 82",  grade: "B-", points: "2.7", description: "Good" },
  { range: "77 – 79",  grade: "C+", points: "2.3", description: "Average" },
  { range: "73 – 76",  grade: "C",  points: "2.0", description: "Average" },
  { range: "70 – 72",  grade: "C-", points: "1.7", description: "Below Average" },
  { range: "67 – 69",  grade: "D+", points: "1.3", description: "Poor" },
  { range: "60 – 66",  grade: "D",  points: "1.0", description: "Poor" },
  { range: "0 – 59",   grade: "F",  points: "0.0", description: "Failing" },
];

function MarksRangeTable() {
  return (
    <div className="marks-table-card">
      <h2>Marks Range & Grade Points</h2>
      <table className="marks-table" aria-label="Marks range and grade points reference">
        <thead>
          <tr>
            <th>Marks Range</th>
            <th>Letter Grade</th>
            <th>Grade Points</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((row) => (
            <tr key={row.grade} className={`grade-row-${row.grade.replace("+", "plus").replace("-", "minus")}`}>
              <td>{row.range}</td>
              <td>
                <span className={`grade-badge grade-${row.grade.replace("+", "plus").replace("-", "minus")}`}>
                  {row.grade}
                </span>
              </td>
              <td>{row.points}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MarksRangeTable;
