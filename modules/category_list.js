import React from 'react'
import CategoryListItem from './category_list_item'

class CategoryList extends React.Component {
   constructor(props){
     super(props)

     this.state = {
       categories: ['FOOD TASTING',
       'THEATER EVENT',
       'HEALTH/WELLNESS',
       'ART EVENT',
       'PARTIES/NIGHTLIFE',
       'SHOPPING',
       'COMEDY',
       'THEATER/DANCE',
       'MUSIC',
       'FESTIVAL EVENT',
       'COMMUNITY',
       'FOOD/DRINK',
       'RELIGION',
       'WORKSHOP',
       'CLASS EVENT',
       'ART/FILM',
       'GAMES',
       'SPORTS/RECREATION',
       'FAMILY EVENT',
       'NETWORKING',
       'CAUSES',
       'NEIGHBORHOOD',
       'MUSIC EVENT',
       'OTHER',
       'BOOKS/LITERATURE',
       'FITNESS',
       'MEETUP']
,
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
          <h1 className="category animated flipInY">Event Categories</h1>
          <p className="animated bounceInLeft">something to tell the user about why they pick categories.</p>
         <div className="categoryItems animated bounceInLeft"> { CategoryItems } </div>
      </div>
       )
  }

 }

export default CategoryList
