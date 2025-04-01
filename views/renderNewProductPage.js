/* 🏗 Structo the Builder */
/* Funkcja generująca stronę HTML z najnowszym produktem */
const renderNewProductPage = (data) => {
    let productContent = '';
    
    if (!data) {
      productContent = "<br /><div>No new products available.</div>";
    } else {
      productContent = `<br /><div>New product data - ${data}</div>`;
    }
  
    return `
      <html>
        <head><title>Shop - Newest product</title></head>
        <body>
          <h1>Newest product</h1>
          <nav>
            <a href='/'>Home</a><br />
            <a href='/product/add'>Add product</a><br />
            <a href='/logout'>Logout</a>
          </nav>
          ${productContent}
        </body>
      </html>
    `;
  };
  
  module.exports = renderNewProductPage;
