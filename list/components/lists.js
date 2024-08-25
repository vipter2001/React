import React from "react"; 
export default function Lists() {
const products =[ {title:'cabbage',isFruit:false,id:1},
  {title:'garlic',isFruit:false,id:2},{title:'Apple',isFruit:true,id:3},
];
return(
  <div>
      <ul>
        {products.map(product => (
          <li key={product.id} style={{ color: product.isFruit ? 'magenta' : 'green' }}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>

);  
}
