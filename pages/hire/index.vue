<template>
  <div>
    <Navbar />
    <br />
    <form style="width: 400px; padding: 0px 20px 0px 20px" class="mx-auto">
      <br />
      <h4>Send hire request</h4>
      <br />
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Comments</label>
        <textarea
          id="form7"
          class="md-textarea form-control"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <Footer />
  </div>
</template>