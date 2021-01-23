import PropTypes from 'prop-types';
import withPrepareData from '../HOC/withPrepareData';
import sortByMonth from '../utils/sortByMonth';

function MonthTable(props) {
  console.log('MonthTable', props);

  return (
      <div>
          <h2>Month Table 2017</h2>
          <table>
            <thead>
            <tr>
                  <th>Month</th>
                  <th>Amount</th>
              </tr>
            </thead>
            <tbody>
            {props.list.map(item => (
                  <tr key={item.id}>
                      <td>{item.month}</td>
                      <td>{item.amount}</td>
                  </tr>
              ))}
            </tbody>
          </table>
      </div>
  );
};

MonthTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    month: PropTypes.string,
    amount: PropTypes.number
  }))
}


const data = withPrepareData(sortByMonth, false)(MonthTable);


export default data;