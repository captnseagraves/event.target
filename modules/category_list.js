import React from 'react'
import CategoryListItem from './category_list_item'

class CategoryList extends React.Component {
   constructor(props){
     super(props)

     this.state = {
       categories: ['art', 'books/literature', 'causes', 'community', 'food/drink', 'games', 'religion/spirituality', 'shopping', 'health/wellnes', 'home/garden', 'music', 'network', 'parties/nightlife', 'sporch', 'theatre/dance'],
       user_cats: []
     }
     this.handler = this.handler.bind(this)
 }

    componentDidMount() {
      console.log('WE IN HERE YOU');
      console.log(document.cookie);
      fetch(`/api/user_category`, {
        credentials: "include",
         headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
        })
         .then(res => res.json())
         .then(cats => {
            console.log('ressy', cats);
            this.setState({user_cats: cats})
         })
      }

      handler() {
        console.log('handleing');
        fetch(`/api/user_category`, {
           method: "GET",
           credentials: "include",
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           }
         })
           .then(res => res.json())
           .then(cats => {
             console.log('ressy', cats);
             this.setState({user_cats: cats})
           })
      }

  render() {

     const CategoryItems =

     this.state.categories.map((category, i)=> {
        return (
           <CategoryListItem key={i} data={i + 1} category={category} user_cats={this.state.user_cats}
           handler={this.handler}
            />
        )
     })
    return (
      <div>
          <h1 className="animated flipInY pageheader">Event Categories</h1>
          <p className="animated bounceInLeft catSlogan">click on any event categories to populate your custom calendar</p>
         <div className="categoryItems animated bounceInLeft">
            { CategoryItems }
        </div>
      </div>
       )
  }

 }

export default CategoryList
