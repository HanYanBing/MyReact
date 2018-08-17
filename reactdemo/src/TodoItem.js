import React from 'react';

// 自定义组件
class TodoItem extends React.Component {

  constructor(props){
    super(props);
    this.childDelete = this.childDelete.bind(this);
  }

  // 子组件和父组件通信，子组件需要调用父组件传递的函数
  childDelete(){
    const {itemClick,index} = this.props;
    itemClick(index);
    // this.props.itemClick(this.props.index);
  }

  render(){
    const {content} = this.props;
    return (
      <div onClick={this.childDelete}>{content}</div>
    )
  }

}

export default TodoItem