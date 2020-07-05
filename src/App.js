import React from 'react';

class App extends React.Component {
  // React.Component 클래스의 기능을 추가한 App 클래스
  // 실제로 React.Component 클래스는 500줄이 넘는 코드로 여러 기능이 구현되어 있음.

  constructor(props){
  super(props);
  console.log('hello'); // console 로그를 통해 작동 순서를 체크 할 수 있구나.
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
  console.log('I just updated');
}

  componentWillUnmount() {
    console.log('Godbye, cruel world');
  }
// render 함수는 아래 값을 실제 화면에 나타나게 해줌 렌더링
  render(){
    console.log("I'm rendering");
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
