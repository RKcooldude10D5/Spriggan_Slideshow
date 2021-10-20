var images = ["https://static.wikia.nocookie.net/beyblade/images/a/a6/Beyblade_Burst_Chozetsu_Shu_Kurenai.png/revision/latest?cb=20181126122609", "https://static.wikia.nocookie.net/beyblade/images/d/d1/S_sf_hasbro.jpg/revision/latest/scale-to-width-down/350?cb=20171104051559","https://static.wikia.nocookie.net/beyblade/images/3/38/StormSprigganKU.jpg/revision/latest/scale-to-width-down/350?cb=20160420190323", "https://static.wikia.nocookie.net/beyblade/images/9/95/LS_7_mr.jpg/revision/latest/scale-to-width-down/350?cb=20171115200916" , "https://static.wikia.nocookie.net/beyblade/images/f/fe/SR_0_zt.jpg/revision/latest/scale-to-width-down/350?cb=20180702121904", "https://static.wikia.nocookie.net/beyblade/images/6/66/SR.jpg/revision/latest/scale-to-width-down/350?cb=20180318100519", "https://static.wikia.nocookie.net/beyblade/images/4/4b/Cho-Z_Spriggan_0W_Zt%27.jpg/revision/latest/scale-to-width-down/350?cb=20181014191013", "https://static.wikia.nocookie.net/beyblade/images/0/06/World_Spriggan_Bey_2.jpg/revision/latest/scale-to-width-down/350?cb=20200811151937", "https://static.wikia.nocookie.net/beyblade/images/5/55/World_Spriggan_Bey_3.jpg/revision/latest/scale-to-width-down/350?cb=20200811152523", "https://static.wikia.nocookie.net/beyblade/images/4/4d/BBDB-Astral_Spriggan_Over_Quattro-0_%28Left%29.png/revision/latest/scale-to-width-down/350?cb=20211005021645", "https://static.wikia.nocookie.net/beyblade/images/9/9e/BBDB-Astral_Spriggan_Over_Quattro-0_%28Right%29.jpg/revision/latest/scale-to-width-down/350?cb=20210714151548"];
var names = ["Shu Kurenai", "Spryzen Spread Fusion","Storm Spryzen Knuckle Unite", "Legend Spryzen 7 Merge", "Spryzen Requiem 0 Zeta Right Spin", "Spryzen Requiem 0 Zeta Left Spin", "Turbo Spryzen 0Wall Zeta", "World Spryzen Unite' 2B Right Spin", "World Spryzen Unite' 2B Left Spin", "Astral Spriggan Over Quattro-0 Right Spin", "Astral Spriggan Over Quattro-0 Left Spin"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    
    var updatedImage = images[i];
  
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
