import React from 'react';
import Button from '@material-ui/core/Button';
import { Filter, List, Footer  } from '../Styles';

import { connect } from 'react-redux';
import { completeAllTasks, deleteAllComplete, setFilter } from '../actions/actions'

const ToolBar = props => {

      return (
        <Footer>
                <Button onClick={props.completeAllTasks}>Marcar todas como completas</Button>

            <Filter>
                <List><Button onClick={() => props.setFilter('todas')} variant='contained'>Todas</Button ></List>
                <List><Button onClick={() => props.setFilter('pendentes')} >Pendentes</Button></List>
                <List><Button onClick={() => props.setFilter('completas')}>Completas</Button></List>
                <List><Button onClick={props.deleteAllComplete}>Remover Completas</Button></List>
            </Filter>
      </Footer>
      );
    
}
  
const mapDispatchToProps = dispatch => {
  return {
    completeAllTasks: () => dispatch(completeAllTasks()),
    deleteAllComplete: () => dispatch(deleteAllComplete()),
    setFilter: (filter) => dispatch(setFilter(filter))
  }
}

export default connect(null, mapDispatchToProps )(ToolBar);
  