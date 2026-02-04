import React, { useState } from 'react'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.type = "Person"; // Helping the UI identify the type
  }

  // Base method
  getDetails() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); 
    this.grade = grade;
    this.type = "Student";
  }

  getDetails() {
    return `I am a Student named ${this.name}. I am in grade ${this.grade}.`;
  }
}
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    this.type = "Teacher";
  }

  
  getDetails() {
    return `I am Professor ${this.name}. I teach ${this.subject}.`;
  }
}

const SchoolSystem = () => {

  const [people, setPeople] = useState([]);
  

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [extraInfo, setExtraInfo] = useState(""); 
  const [role, setRole] = useState("student"); 

  const handleAdd = (e) => {
    e.preventDefault();
    
    let newPerson;

    // Polymorphism in action: We create different objects based on selection
    if (role === "student") {
      newPerson = new Student(name, age, extraInfo);
    } else {
      newPerson = new Teacher(name, age, extraInfo);
    }

    setPeople([...people, newPerson]);
    
    // Reset Form
    setName("");
    setAge("");
    setExtraInfo("");
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: 'center' }}>School Management (OOP)</h2>

      {/* INPUT FORM */}
      <form onSubmit={handleAdd} style={styles.form}>
        <select 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>

        <input 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={styles.input} 
          required 
        />
        
        <input 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          style={styles.input} 
          required 
        />

        <input 
          placeholder={role === "student" ? "Grade (e.g. 10th)" : "Subject (e.g. Math)"} 
          value={extraInfo} 
          onChange={(e) => setExtraInfo(e.target.value)} 
          style={styles.input} 
          required 
        />

        <button type="submit" style={styles.button}>Add {role}</button>
      </form>

      {/* DISPLAY LIST */}
      <div style={styles.list}>
        {people.map((person, index) => (
          <div key={index} style={styles.card}>
            {/* Using the polymorphic method getDetails() */}
            <strong>{person.type}: </strong> {person.getDetails()}
          </div>
        ))}
        {people.length === 0 && <p style={{textAlign: 'center'}}>No records yet.</p>}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' },
  form: { display: 'flex', flexDirection: 'column', gap: '10px', background: '#f0f0f0', padding: '15px', borderRadius: '8px' },
  input: { padding: '8px', fontSize: '1rem' },
  button: { padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' },
  list: { marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' },
  card: { padding: '10px', border: '1px solid #ccc', borderRadius: '5px', background: '#fff' }
};

export default SchoolSystem;