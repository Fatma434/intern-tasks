import "./productCard.css"

export default function ProductCard() {
  const products = [
    { id: 1, name: "Meme & more tee", price: "LE 1,723", image: "https://images.meesho.com/images/products/417627848/pdvbk_512.webp?width=512" ,size: "small" },
    { id: 2, name: "Rectangle shorts", price: "LE 1,540", image: "https://i0.wp.com/missmonmon.com/wp-content/uploads/2022/06/img_9727.jpg?resize=620%2C930&ssl=1",  size: "small"},
    { id: 3, name: "Best buds socks", price: "LE 729", image: "https://i.pinimg.com/736x/fc/2c/70/fc2c70d104078ecb9321fd4955495281.jpg" ,size: "small"},
    { id: 4, name: "Piggy hat", price: "LE 1,029", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmoCLPvlinBmynBTyQjNEusMfeq29ig25Ykw&s" ,size: "small" },
    { id: 5, name: "Unlimited tee", price: "LE 1,723", image: "https://i.ebayimg.com/images/g/F08AAOSwf4JnKd7B/s-l400.jpg" ,size: "small"},
    { id: 6, name: "Piggy bottle", price: "LE 985", image: "https://img-va.myshopline.com/image/store/1656670318789/b7cbd62b5f5f4488bc422430f7bbaaea.jpg?w=1000&h=1500", size: "small" },
  { id: 7, name: "Here, there tee", price: "LE 1,477", image: "https://img-va.myshopline.com/image/store/1656670318789/-KSB2310015.jpeg?w=1000&h=1500", size: "large" },
  
  { id: 8, name: "Daydreamer tee", price: "LE 1,477", image: "https://topmanta.store/cdn/shop/products/sudaderas_1916.jpg?v=1670415117&width=1445", size: "small" },
  { id: 9, name: "Thinking cap", price: "LE 1,029", image: "https://i.pinimg.com/736x/e2/18/4b/e2184be9e2805ac312e578584ada476f.jpg", size: "small" },
  { id: 10, name: "Here, there sweatshirt", price: "LE 2,661", image: "https://i.pinimg.com/736x/de/5a/88/de5a8872955f3031a937b33bc8199bbc.jpg", size: "small" },
  
  { id: 11, name: "Kickback socks", price: "LE 729", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSTKCkMT7qwfp9vcNCDXfQpcArbka8aB5UA&s", size: "small" },
  
];

  return (
    <div className="product-grid">
      {products.map((p) => (
        <div key={p.id} className={`product-card ${p.size}`}>
          <img src={p.image} alt={p.name} className="product-image" />
          <div className="product-info">
            {/* <span className="badge">New</span> */}
            
              <h3>{p.name}</h3>
            <p>{p.price}</p>
            
          </div>
        </div>
      ))}
    </div>
  );
}
