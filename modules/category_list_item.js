import React from 'react'
// import '../public/App.css';

class CategoryListItem  extends React.Component{

   render () {

      var el = null
      if (this.props.user_cats.includes(this.props.data)){
         el =  (
               <div onClick={this.catSubmit.bind(this)} className="catToggle" value={this.props.category}
               > {this.props.category}
               </div>
         )
      } else {
         el = (
               <div onClick={this.catSubmit.bind(this)} className="divvy" value={this.props.category}> {this.props.category}
               </div>
         )
      }
      return el
   }

   catSubmit(event) {
      event.preventDefault()

      let body = {
         user_id: document.cookie,
         category_id: this.props.data,
      }

      if (event.target.className === 'catToggle'){
         fetch(`/api/user_category`, {
           method: "DELETE",
           body: JSON.stringify(body),
           credentials: 'include',
           headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
           }
         })
         .then((lemon) => this.props.handler())
      } else {
         fetch(`/api/user_category`, {
            method: "POST",
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
            }
         })
         .then((lemon) => this.props.handler())
      }
   }
}

export default CategoryListItem
