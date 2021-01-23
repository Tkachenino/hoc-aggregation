import monthDictionary from './monthDictionary';

const sortByMonth = (props) => {
  const props2018 = props.list.filter(i => new Date(i.date).getFullYear() === 2017)
  props2018.sort((a, b) => {
    const DateA = new Date(a.date).getMonth();
    const DateB = new Date(b.date).getMonth();

    return (DateA - DateB);
  })
  const newProps =props2018.map(i => {
    return {month: monthDictionary[new Date(i.date).getMonth()], amount: i.amount, id: i.id}
  })
 
  return newProps;
}

export default sortByMonth;