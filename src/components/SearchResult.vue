<template>


  <div class="section search-result-wrap">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="heading">Search: 'Thought'</div>
        </div>
      </div>
      <div class="row posts-entry">
        <div class="col-lg-8">
          <div class="blog-entry d-flex blog-entry-search-item">
            <router-link to="/single" class="img-link me-4">
              <img src="/images/img_1_sq.jpg" alt="Image" class="img-fluid">
            </router-link>
            <div>
              <span class="date">Apr. 14th, 2022</span>
              <h2><router-link to="/single">Thought you loved Python? Wait until you meet Rust</router-link></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><router-link to="/single" class="btn btn-sm btn-outline-primary">Read More</router-link></p>
            </div>
          </div>
          <div class="blog-entry d-flex blog-entry-search-item">
            <router-link to="/single" class="img-link me-4">
              <img src="/images/img_2_sq.jpg" alt="Image" class="img-fluid">
            </router-link>
            <div>
              <span class="date">Apr. 14th, 2022</span>
              <h2><router-link to="/single">Thought you loved Python? Wait until you meet Rust</router-link></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><router-link to="/single" class="btn btn-sm btn-outline-primary">Read More</router-link></p>
            </div>
          </div>
          <div class="blog-entry d-flex blog-entry-search-item">
            <router-link to="/single" class="img-link me-4">
              <img src="/images/img_3_sq.jpg" alt="Image" class="img-fluid">
            </router-link>
            <div>
              <span class="date">Apr. 14th, 2022</span>
              <h2><router-link to="/single">Thought you loved Python? Wait until you meet Rust</router-link></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><router-link to="/single" class="btn btn-sm btn-outline-primary">Read More</router-link></p>
            </div>
          </div>
          <div class="blog-entry d-flex blog-entry-search-item">
            <router-link to="/single" class="img-link me-4">
              <img src="/images/img_4_sq.jpg" alt="Image" class="img-fluid">
            </router-link>
            <div>
              <span class="date">Apr. 14th, 2022</span>
              <h2><router-link to="/single">Thought you loved Python? Wait until you meet Rust</router-link></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><router-link to="/single" class="btn btn-sm btn-outline-primary">Read More</router-link></p>
            </div>
          </div>
          <div class="blog-entry d-flex blog-entry-search-item">
            <router-link to="/single" class="img-link me-4">
              <img src="/images/img_5_sq.jpg" alt="Image" class="img-fluid">
            </router-link>
            <div>
              <span class="date">Apr. 14th, 2022</span>
              <h2><router-link to="/single">Thought you loved Python? Wait until you meet Rust</router-link></h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nobis ea quis inventore vel voluptas.</p>
              <p><router-link to="/single" class="btn btn-sm btn-outline-primary">Read More</router-link></p>
            </div>
          </div>
          <div class="row text-start pt-5 border-top">
            <div class="col-md-12">
              <div class="custom-pagination">
                <span>1</span>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <span>...</span>
                <a href="#">15</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 sidebar">
          <div class="sidebar-box search-form-wrap mb-4">
            <form action="#" class="sidebar-search-form">
              <span class="bi-search"></span>
              <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter">
            </form>
          </div>
          <div class="sidebar-box">
            <h3 class="heading">Popular Posts</h3>
            <div class="post-entry-sidebar">
              <ul>
                <li>
                  <router-link to="/single">
                    <img src="/images/img_1_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/single">
                    <img src="/images/img_2_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </router-link>
                </li>
                <li>
                  <router-link to="/single">
                    <img src="/images/img_3_sq.jpg" alt="Image placeholder" class="me-4 rounded">
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="sidebar-box">
            <h3 class="heading">Categories</h3>
            <ul class="categories">
              <li><router-link to="/category">Food <span>(12)</span></router-link></li>
              <li><router-link to="/category">Travel <span>(22)</span></router-link></li>
              <li><router-link to="/category">Lifestyle <span>(37)</span></router-link></li>
              <li><router-link to="/category">Business <span>(42)</span></router-link></li>
              <li><router-link to="/category">Adventure <span>(14)</span></router-link></li>
            </ul>
          </div>
          <div class="sidebar-box">
            <h3 class="heading">Tags</h3>
            <ul class="tags">
              <li><router-link to="/category">Travel</router-link></li>
              <li><router-link to="/category">Adventure</router-link></li>
              <li><router-link to="/category">Food</router-link></li>
              <li><router-link to="/category">Lifestyle</router-link></li>
              <li><router-link to="/category">Business</router-link></li>
              <li><router-link to="/category">Freelancing</router-link></li>
              <li><router-link to="/category">Travel</router-link></li>
              <li><router-link to="/category">Adventure</router-link></li>
              <li><router-link to="/category">Food</router-link></li>
              <li><router-link to="/category">Lifestyle</router-link></li>
              <li><router-link to="/category">Business</router-link></li>
              <li><router-link to="/category">Freelancing</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 

<script lang="ts" setup>
// 目前暫無邏輯，後續可加入
</script>

<style scoped>
/* 可將對應 CSS 搬移進來 */
</style> 