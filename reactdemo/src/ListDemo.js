import React, { Component } from 'react';
import TodoItem from './TodoItem';


// 定义react组件（是一个类）
class ListDemo extends Component { //或者继承 React.Component,那么import就不用{Component}

  constructor(props){
    super(props);
    this.state = {
      list:[],
      inptutValue:''
    }

    this.inputChange = this.inputChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  // 定义方法

  // 不能自动双向绑定，需要改变时进行手动赋值操作  
  inputChange(e){
    this.setState({
      inptutValue:e.target.value
    })
  }

  // 点击添加内容
  btnClick(){
    if(this.state.inptutValue){
      this.setState({
        list:[...this.state.list,this.state.inptutValue],
        inptutValue:''
      })
    }
  }

  deleteItem(index){
    const list = [...this.state.list];  //拷贝
    list.splice(index,1);

    // this.setState({
    //   list:list
    // });
    
    // 简写
    this.setState({list});
  }

  getItems(){

    return(
      this.state.list.map((item,index)=>{
        return <TodoItem 
          itemClick = {this.deleteItem} 
          key={index} 
          content={item} 
          index ={index}/>
      })
    ) 
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
      // 循环li key值不能相同--》所以赋值索引（相同会报警告）
      // 父组件通过属性的方式向子组件传递参数
      // 子组件通过props的方式接收父组件传递过来的参数
      <div>
        <div>
          <input type="text" value={this.state.inptutValue} onChange = {this.inputChange} />
          <button className='btnClass' style={{'background':'red'}} onClick = {this.btnClick}>add</button>
        </div>

        <ul>
          {this.getItems()}
        </ul>
      </div>
    );
  }
}

export default ListDemo;
