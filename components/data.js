import React from "react";
import Table from 'react-bootstrap/Table';

function Data(subjects) {
  const data = [
    {
      id: 1,
      semester: 1,
      name: 'Matematika 1',
      credits: '6'
    },
    {
      id: 2,
      semester: 1,
      name: 'Algoritmizace a programování',
      credits: '6'
    },
    {
      id: 3,
      semester: 1,
      name: 'Metodologie',
      credits: '6'
    },
    {
      id: 4,
      semester: 2,
      name: 'Matematika 2',
      credits: '6'
    },
    {
      id: 5,
      semester: 2,
      name: 'Informatika',
      credits: '6'
    },
    {
      id: 6,
      semester: 2,
      name: 'Číslicová technika',
      credits: '6'
    },
    {
        id: 4,
        semester: 3,
        name: 'Matematika 3',
        credits: '6'
      },
      {
        id: 5,
        semester: 4,
        name: 'Informatika',
        credits: '6'
      },
  ]

  const filteredData = data.filter(subject => subject.semester === subjects.semester);

  return (
    <Table class="table">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Credits</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map(subject => (
          <tr key={subject.id}>
            
            <td>{subject.name}</td>
            <td>{subject.credits}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Data;