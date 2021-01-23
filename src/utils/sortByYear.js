const sortByYear = (props) => {
  const newProps = props.list.map(i => {
    return {year: new Date(i.date).getFullYear(), amount: i.amount, id: i.id}
  })
  newProps.sort((a, b) => {
    const DateA = new Date(a.year).getTime();
    const DateB = new Date(b.year).getTime();

    return (DateB - DateA);
  })

  return newProps;
}

export default sortByYear;