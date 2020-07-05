import React from 'react';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  // 실제로 React.Component 클래스는 500줄이 넘는 코드로 여러 기능이 구현되어 있음.
  state = {
    count: 0,
  };

  add = () => {
    this.setState({ count : this.state.count + 1 });
  };

  minus = () => {
    this.setState({ count : this.state.count - 1 });
  };

// render 함수는 아래 값을 실제 화면에 나타나게 해줌 렌더링
  render(){

    return (
      <div>
        <h1>The number is: {this.state.count}</h1> 
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
