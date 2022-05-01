<template>
  <div class="TruckTemp">
    <h1 class="title1">{{ Tname }}</h1>
    <div id="TruckDetail">
      <slot name="Tpicture">
        <section class="gallery">
          <div class="gallery__item">
            <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
            <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt=""/></label>
          </div>
          <div class="gallery__item">
            <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt=""/>
            <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt=""/></label>
          </div>
          <div class="gallery__item">
            <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt=""/>
            <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt=""/></label>
          </div>
          <div class="gallery__item">
            <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
            <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt=""/>
            <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt=""/></label>
          </div>
        </section>
      </slot>
      <div class="table">
        <table id="detail">
            <tr>
                <th>Name</th>
                <td>{{Tname}}</td>
            </tr>
            <tr>
                <th>Location:</th>
                <td>{{TLocation}}</td>
            </tr>
            <tr>
                <th>Hours</th>
                <td>{{Thours}}</td>
            </tr>
        </table>
      </div>
    </div>
    <slot name="TlocationP"><p>Location of Map</p></slot>
    <slot name="Tmenu"><p>Location of Menu</p></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TruckTemp',
  props: {
    Tname: String,
    TLocation: String,
    Thours: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/scss/gallery.scss";
@import "src/scss/_base2.scss";
.title1{
  margin: 5px;
  padding: 5px;
}

#TruckDetail{
    display:flex;
    flex-wrap: wrap;
    td{
        width:70%;
    }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
.list1 li{
  margin: 0 35px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
thead th {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
}

thead th:first-child {
  left: 0;
  z-index: 3;
}

tfoot {
  position: -webkit-sticky;
  bottom: 0;
  z-index: 2;
}

tfoot td {
  position: sticky;
  bottom: 0;
  z-index: 2;
  background: hsl(20, 50%, 70%);
}

tfoot td:first-child {
  z-index: 3;
}

tbody {
  overflow: scroll;
  height: 200px;
}

/* MAKE LEFT COLUMN FIXEZ */
tr > :first-child {
  position: -webkit-sticky;
  position: sticky;
  background: hsl(180, 50%, 70%);
  left: 0;
}
/* don't do this */
tr > :first-child {
  box-shadow: inset 0px 1px black;
}
</style>
