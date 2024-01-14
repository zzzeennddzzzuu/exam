import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";




class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      currentItmes:[],
      items:[
        {
          id:1,
          title:'клавіатура Hator',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'hator keyboard.jpeg',
          price: '1200',
          category: 'keyboard'
        },
        {
          id:2,
          title:'клавіатура Razor',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'razor keyboard.jpeg',
          price:'1000',
          category: 'keyboard'
        },
        {
          id:3,
          title:'клавіатура HyperX',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'hyperX keyboard.jpeg',
          price:'1500',
          category: 'keyboard'
        },
        {
          id:4,
          title:'мишка Hator',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'hator mouse.png',
          price:'1300',
          category: 'mouse'
        },
        {
          id:5,
          title:'мишка Razor',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'razor mouse.webp',
          price:'1200',
          category: 'mouse'
        },
        {
          id:6,
          title:'мишка HyperX',
          desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          img:'hyperX mouse.jpeg',
          price:'1400',
          category: 'mouse'
        }  

      ]
    }
    this.currentItmes = this.state.items
    this.chooseCategory = this.chooseCategory.bind(this)

  }
  render() {
  return (
    <div calssName="wrapper">
      <Header />
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items={this.state.currentItmes} />
      <Footer/>
    </div>
  );
}
chooseCategory(category){
  console.log(category)
}

  
}

export default App;
