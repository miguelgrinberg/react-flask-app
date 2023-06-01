import React, { useState, useEffect } from 'react';
import './App.css';

/*TODOS
Create functions for pandas operations
Add API
Add table of raw data?
Add charts and graphs according to spreadsheet
Add form to generate for seed and for query parameters
Commit history, comments, and documentation
 */

function App() {

  useEffect(() => {
    fetch('/api/get_user_statistics').then(res => res.json()).then(data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="user-statistics-dashboard">
      {/*
      <Formik>
        <Form>
          <div>
            <label>Email</label>
            <Field type="email" name="email" placeholder="Email" />
          </div>
          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
        </Form>
      </Formik>
  */}
      <div>
        <h3>User Summary statistics</h3>
        <h4>Female Users</h4>
        <table>
          <thead>
            <tr>
              <td>Age Group</td>
              <td>Percentage</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>under 16</td>
              <td>20%</td>
            </tr>
          </tbody>
        </table>
        <h4>Breakdown by Age</h4>
        <table>
          <thead>
            <tr>
              <td>Age Group</td>
              <td>Percentage</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>under 16</td>
              <td>20%</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      */}
    </div>
  );
}

export default App;
