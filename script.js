<script>
    const itemsprice=document.querySelectorAll(".price")
    let totalAmount= 0

    itemsprice.forEach((item)=>{
        console.log(item.textContent)
        totalAmount+=Number(item.textContent)
    })

    console.log(totalAmount)

    // console.log(itemsprice)
  </script>

