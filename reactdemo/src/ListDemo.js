import React, { Component } from 'react';

// 定义react组件（是一个类）
class ListDemo extends Component { //或者继承 React.Component,那么import就不用{Component}

  constructor(props){
    super(props);
    this.state = {
      list:[
        'react',
        'Englist'
      ]
    }

  }

  // 定义方法
  btnClick(){
    this.setState({
      list:[...this.state.list,'Helloworld']
    })
  }

  // 必须有render函数， 负责组件显示内容 
  render() {
    return (
      // JSX语法，直接使用，不需要添加引号
      // 添加大括号，可以识别JS表达式
      // <div>
      //   {1+2} 

      //   <br/>Hello React!
      // </div>
      

      // 只能包含在一个大的标签之内，不能多个并列
      <div>
        <div>
          <input type="text" />
          <button onClick = {this.btnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ListDemo;
