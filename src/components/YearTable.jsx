import PropTypes from 'prop-types';
import withPrepareData from '../HOC/withPrepareData';
import sortByYear from '../utils/sortByYear';

function YearTable(props) {
  console.log('YearTable', props);

  return (
      <div>
          <h2>Year Table</h2>
          <table>
          <thead>

              <tr>
                  <th>Year</th>
                  <th>Amount</th>
              </tr>
              </thead>
              <tbody>
              {props.list.map(item => (
                  <tr key={item.id}>
                      <td>{item.year}</td>
                      <td>{item.amount}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </div>
  );
};

YearTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.number
  }))
}

const data = withPrepareData(sortByYear, false)(YearTable);

export default data;