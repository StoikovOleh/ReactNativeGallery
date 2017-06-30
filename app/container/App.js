import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import Gallery from '../components/Gallery'

import { connect } from 'react-redux';
import { fetchData } from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
      const { photos } = this.props.appData.data;
      return (
            <ScrollView>
                {photos?<Gallery navigate={this.props.navigate.navigate} data={photos} />:false}
            </ScrollView>
      )
  }
}

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)