import React from 'react';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  // 실제로 React.Component 클래스는 500줄이 넘는 코드로 여러 기능이 구현되어 있음.
  state = {
    isLoading : true,
    movies: [],
  };
  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout( () => {
      this.setState({ isLoading: false });
    }, 6000);
    
  }



  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
