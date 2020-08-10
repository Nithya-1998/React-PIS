import React from 'react';
import AllProduct from '../products/products';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <AllProduct />
            </div>
         );
    }
}
 
export default Home;