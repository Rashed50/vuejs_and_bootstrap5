
<template>

    <div class="container bg-secondary">
        <div class="col-md-12">
            <div class="row">
                <h3>This is dropdown menu </h3> <br><br>
                <div class="form-group row custom_form_group">
                    <label class="col-sm-3 control-label" for="blog_type" >blog_type:</label>
                    <div class="col-sm-5">
                        <select class="form-select" name="blog_type" id="blog_type" v-model="blog_type">
                        <option value="">Select Blog Type</option>
                        <option :value="blog.id" v-for="blog in blog_data" :key="blog.id" >
                            {{ blog.name }}
                        </option>
                    </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

    export default{
            name:"BlogType",
            data(){
                return{
                    blog_type:"",
                    blog_data:[{'id':1,'name':'Education'},{'id':2,'name':'World-Education'},{'id':3,'name':'Sports'},{'id':4,'name':'World News'}]
                }
            }
        }

</script>
