import React, { useState } from "react";
import MarksRangeTable from "./MarksRangeTable";

const gradePoints = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  F: 0.0,
};

function getGradeFromMark(mark) {
  if (mark >= 97) return "A+";
  if (mark >= 93) return "A";
  if (mark >= 90) return "A-";
  if (mark >= 87) return "B+";
  if (mark >= 83) return "B";
  if (mark >= 80) return "B-";
  if (mark >= 77) return "C+";
  if (mark >= 73) return "C";
  if (mark >= 70) return "C-";
  if (mark >= 67) return "D+";
  if (mark >= 60) return "D";
  return "F";
}

const emptySubject = { name: "", mark: "", credits: "3" };

function GPACalculator() {
  const [subjects, setSubjects] = useState([{ ...emptySubject }]);
  const [gpa, setGpa] = useState(null);

  const updateSubject = (index, field, value) => {
    const updated = [...subjects];
    updated[index] = { ...updated[index], [field]: value };
    setSubjects(updated);
  };

  const addSubject = () => setSubjects([...subjects, { ...emptySubject }]);

  const removeSubject = (index) => {
    if (subjects.length === 1) return;
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    for (const sub of subjects) {
      const mark = parseFloat(sub.mark);
      const credits = parseFloat(sub.credits);
      if (isNaN(mark) || isNaN(credits) || credits <= 0) continue;
      const grade = getGradeFromMark(mark);
      totalPoints += gradePoints[grade] * credits;
      totalCredits += credits;
    }

    if (totalCredits === 0) {
      setGpa(null);
      return;
    }
    setGpa((totalPoints / totalCredits).toFixed(2));
  };

  const reset = () => {
    setSubjects([{ ...emptySubject }]);
    setGpa(null);
  };

  const getGpaClass = (value) => {
    if (value >= 3.7) return "gpa-excellent";
    if (value >= 3.0) return "gpa-good";
    if (value >= 2.0) return "gpa-average";
    return "gpa-low";
  };

  return (
    <div className="calculator-container">
      <div className="calculator-card">
        <h2>Enter Your Subjects</h2>

        <div className="subject-header">
          <span>Subject Name</span>
          <span>Marks (0–100)</span>
          <span>Credits</span>
          <span>Grade</span>
          <span></span>
        </div>

        {subjects.map((sub, i) => {
          const mark = parseFloat(sub.mark);
          const grade = !isNaN(mark) ? getGradeFromMark(mark) : "—";
          return (
            <div className="subject-row" key={i}>
              <input
                type="text"
                placeholder="e.g. Mathematics"
                value={sub.name}
                onChange={(e) => updateSubject(i, "name", e.target.value)}
              />
              <input
                type="number"
                placeholder="0–100"
                min="0"
                max="100"
                value={sub.mark}
                onChange={(e) => updateSubject(i, "mark", e.target.value)}
              />
              <input
                type="number"
                placeholder="Credits"
                min="1"
                max="6"
                value={sub.credits}
                onChange={(e) => updateSubject(i, "credits", e.target.value)}
              />
              <span className={`grade-badge grade-${grade.replace("+", "plus").replace("-", "minus")}`}>
                {grade}
              </span>
              <button
                className="btn-remove"
                onClick={() => removeSubject(i)}
                disabled={subjects.length === 1}
                aria-label="Remove subject"
              >
                ✕
              </button>
            </div>
          );
        })}

        <div className="actions">
          <button className="btn-outline" onClick={addSubject}>
            + Add Subject
          </button>
          <div className="right-actions">
            <button className="btn-secondary" onClick={reset}>
              Reset
            </button>
            <button className="btn-primary" onClick={calculateGPA}>
              Calculate GPA
            </button>
          </div>
        </div>

        {gpa !== null && (
          <div className={`gpa-result ${getGpaClass(parseFloat(gpa))}`}>
            <span className="gpa-label">Your GPA</span>
            <span className="gpa-value">{gpa}</span>
            <span className="gpa-scale">/ 4.00</span>
          </div>
        )}
      </div>

      <MarksRangeTable />
    </div>
  );
}

export default GPACalculator;
