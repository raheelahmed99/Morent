
// display catalog items
function displayCatalog(){
    let catalog1 = document.querySelector('.catalog_container1');
    let catalog2 = document.querySelector('.catalog_container2');
    vehicals.forEach(vehical => {
            vehical.popular ? 
              catalog1.innerHTML += 
    
              
// Catalog box pf popular cars

    `
      <div class="catalog_box">
                <div class="car_detail">
                    <span class="car_name">
                        ${vehical.name}
                    </span>
                    <span class="favourite">
                        <i onClick="favourite" class="fa-regular fa-heart"></i>
                    </span>
                    <p class="car_categoury">
                    ${vehical.category}
                    </p>
                </div>

                <div class="car_image">
                    <img src="${vehical.image.img_file}" 
                          alt="car" 
                          width="${vehical.image.img_width}" 
                          height="${vehical.image.img_height}" ;>
                </div>

                <div class="car_Spesification">
                    <div class="gas_capacity">
                        <span class="icon">
                            <i class="fa-solid fa-gas-pump"></i>
                        </span>
                        <span>${vehical.fuel_capacity}L</span>
                    </div>
                    <div class="car_type">
                        <span class="icon">
                            <i class="fa-solid fa-car"></i>
                        </span>
                        <span>${vehical.type}</span>
                    </div>
                    <div class="pasenger_capacity">
                        <span class="icon">
                            <i class="fa-solid fa-user-group"></i>
                        </span>
                        <span>${vehical.passenger} People</span>
                    </div>
                </div>
                <div class="price_div">
                <div class="price">
                   <div class="current_price">
                        $${vehical.current_price}/
                            <span> day</span>
                   </div>
                   <div class="previous_price">
                     <div>${vehical.previous_price !== null ? `<span><s>$${vehical.previous_price}</s></span>`  : '' }</div>
                   </div>
                    
                </div>
                <button class="rent_btn">Rent Now</button>
            </div>

            `  
// Catalog box pf recommend cars

     : catalog2.innerHTML +=
    ` <div class="catalog_box">
                <div class="car_detail">
                    <span class="car_name">
                        ${vehical.name}
                    </span>
                    <span class="favourite">
                        <i onClick="favourite" class="fa-regular fa-heart"></i>
                    </span>
                    <p class="car_categoury">
                    ${vehical.category}
                    </p>
                </div>

                <div class="car_image">
                    <img src="${vehical.image.img_file}" 
                          alt="car" 
                          width="${vehical.image.img_width}" 
                          height="${vehical.image.img_height}" ;>
                </div>

                <div class="car_Spesification">
                    <div class="gas_capacity">
                        <span class="icon">
                            <i class="fa-solid fa-gas-pump"></i>
                        </span>
                        <span>${vehical.fuel_capacity}L</span>
                    </div>
                    <div class="car_type">
                        <span class="icon">
                            <i class="fa-solid fa-car"></i>
                        </span>
                        <span>${vehical.type}</span>
                    </div>
                    <div class="pasenger_capacity">
                        <span class="icon">
                            <i class="fa-solid fa-user-group"></i>
                        </span>
                        <span>${vehical.passenger} People</span>
                    </div>
                </div>
                <div class="price_div">
                <div class="price">
                   <div class="current_price">
                        $${vehical.current_price}/
                            <span> day</span>
                   </div>
                   <div class="previous_price">
                     <div>${vehical.previous_price !== null ? `<span><s>$${vehical.previous_price}</s></span>`  : '' }</div>
                   </div>
                    
                </div>
                <button class="rent_btn">Rent Now</button>
            </div>
    `
    })
}

    
displayCatalog();