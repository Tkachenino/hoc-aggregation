import PropTypes from 'prop-types';
import withPrepareData from '../HOC/withPrepareData';

function SortTable(props) {
  console.log('SortTable', props);

  return (
      <div>
          <h2>Sort Table</h2>
          <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              {props.list.map(item => (
                  <tr key={item.id}>
                      <td>{item.date}</td>
                      <td>{item.amount}</td>
                  </tr>
                  
              ))}
              </tbody>
          </table>
      </div>
  );
};

SortTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    date: PropTypes.string,
    amount: PropTypes.number
  }))
}

const data = withPrepareData(null, true)(SortTable);

export default data;