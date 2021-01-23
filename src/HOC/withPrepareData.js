const withPrepareData = (func, sort) => Component => {
  let newProps;
  return function(props) {
    if(sort) {
      props.list.sort((a, b) => b.amount - a.amount)
    }
    if (typeof func === 'function') {
      newProps = func(props);
    }

    return <Component list={newProps ? newProps : props.list}/>
  }
}

export default withPrepareData;