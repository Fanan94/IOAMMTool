<template>
    <!-- main container -->
    <div>
        <div class="container-fluid">
            <div id="pad-wrapper">

                <div class="row-fluid">
                    <div class="span12">
                        <div id="fuelux-wizard" class="wizard row-fluid">
                            <ul class="wizard-steps">
                                <li data-target="#step1" class="active">
                                    <span class="step">1</span>
                                    <span class="title">部署</span>
                                </li>
                                <li data-target="#step2">
                                    <span class="step">2</span>
                                    <span class="title">选择 <br /> 路径</span>
                                </li>
                                <li data-target="#step3">
                                    <span class="step">3</span>
                                    <span class="title">提交</span>
                                </li>
                                <li data-target="#step4">
                                    <span class="step">4</span>
                                    <span class="title">再次 <br /> 部署</span>
                                </li>
                            </ul>
                        </div>
                        <div class="step-content">
                            <div class="step-pane active" id="step1">
                                <div class="row-fluid form-wrapper">
                                    <div class="span10">

                                        <div class="drag-content span12"  style="min-height: 400px;">

                                        	

                                        	 <div class="choice span5" style="min-height: 400px;">
                                        	 	<div class="tabbable" id="tabs-259071">
													<ul class="nav nav-tabs">
														<li class="active">
															<a href="#panel-173637" data-toggle="tab">设备</a>
														</li>
														<li>
															<a href="#panel-776434" data-toggle="tab">组件</a>
														</li>
													</ul>
													<div class="tab-content" style="margin-left: 2px;">
														<div class="tab-pane active" id="panel-173637">
															<input class="search" type="text" placeholder="搜索设备.." />
															<br/><br/>

															<div class="row-fluid table">
											                    <table class="table table-hover" id="table_value">
											                        <thead>
											                        <tr>
											                            <th class="span4 sortable">
											                               设备名称
											                            </th>
											                            <th class="span3 sortable">
											                                <span class="line"></span>设备状态
											                            </th>

											                        </tr>
											                        </thead>
											                        <tbody>
											                        <!-- row -->
											                        <!-- <tr class="first" v-for="(device,index) in devices" :key="index">
											                            <td style="display:none">{{device.id}}</td>
											                            <td>
											                                {{device.name}}
											                            </td>
											                            <td>
											                               {{device.state}}     
											                            </td>
											                           
											                        </tr> -->
											                        <!-- row -->
											                        <tr>
											                        	<td><i class="icon-laptop"></i>&nbsp;设备1</td>
											                        	<td>在线</td>
											                        </tr>

											                        </tbody>
											                    </table>
											                </div>

															<p>
																设备内容.
															</p>
														</div>
														<div class="tab-pane" id="panel-776434">
															<input class="search" type="text" placeholder="搜索组件.." />
															<br/><br/>

															<div class="row-fluid table">
											                    <table class="table table-hover" id="table_value">
											                        <thead>
											                        <tr>
											                            <th class="span5 sortable">
											                               组件名称
											                            </th>
											                            <th class="span2 sortable">
											                                <span class="line"></span>大小(MB)
											                            </th>
											                            <th class="span2 sortable">
											                                <span class="line"></span>版本
											                            </th>

											                        </tr>
											                        </thead>
											                        <tbody>
											                        <tr>
											                        	<td>
											                        		<!-- 组件树 -->
											                        		<ul id="treeDemo" class="ztree"></ul>
											                        	</td>
											                        	<td>1024</td>
											                        	<td>V1.2.1</td>
											                        </tr>

											                        </tbody>
											                    </table>
											                </div>
															<p>
																组件内容.
															</p>
														</div>
													</div>
												</div>
                                        		<!-- <div class="devices">
                                        			<h4>设备</h4>
                                        			<br/>
                                        			<div class='select-device' draggable='true' @dragstart='drag($event)' v-for='device in devices'>{{device.name}}</div>
                                        		</div>
                                        		                                        	
                                        		<br/><br/>
                                        		<div class="component">
                                        			<h4>组件</h4>
                                        			<br/>
                                        			<div class='select-comp' draggable='true' @dragstart='drag($event)' v-for='component in components'>{{component.name}}</div>
                                        		</div> -->
                                        	</div>
                                        	
                                        	<div class="move span7" style="min-height: 400px;" @drop='drop($event)' @dragover='allowDrop($event)'>
                                        	
                                        	</div> 										  
										</div>

                                    </div>
                                </div>
                            </div>
                            <div class="step-pane" id="step2">
                                <div class="row-fluid form-wrapper">
                                    <div class="span8">
                                        <form />
                                            <div class="field-box">
                                                <label>Address:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>City:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Postal/ZIP code:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Country:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="step-pane" id="step3">
                                <div class="row-fluid form-wrapper">
                                    <div class="span8">
                                        <form />
                                            <div class="field-box">
                                                <label>Username:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Photo:</label>
                                                <input type="file" />
                                            </div>
                                            <div class="field-box">
                                                <label>App name:</label>
                                                <input class="span8" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Time zone:</label>
                                                <select>
                                                    <option value="Hawaii" />(GMT-10:00) Hawaii
                                                    <option value="Alaska" />(GMT-09:00) Alaska
                                                    <option value="Pacific Time (US &amp; Canada)" />(GMT-08:00) Pacific Time (US &amp; Canada)
                                                    <option value="Arizona" />(GMT-07:00) Arizona
                                                    <option value="Mountain Time (US &amp; Canada)" />(GMT-07:00) Mountain Time (US &amp; Canada)
                                                    <option value="Central Time (US &amp; Canada)" />(GMT-06:00) Central Time (US &amp; Canada)
                                                    <option value="Eastern Time (US &amp; Canada)" />(GMT-05:00) Eastern Time (US &amp; Canada)
                                                    <option value="Indiana (East)" />(GMT-05:00) Indiana (East)<option value="" disabled="disabled" />-------------
                                                    <option value="American Samoa" />(GMT-11:00) American Samoa
                                                    <option value="International Date Line West" />(GMT-11:00) International Date Line West
                                                    <option value="Midway Island" />(GMT-11:00) Midway Island
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="step-pane" id="step4">
                                <div class="row-fluid form-wrapper payment-info">
                                    <div class="span8">
                                        <form />
                                            <div class="field-box">
                                                <label>Subscription Plan:</label>
                                                <select id="plan" class="span5">
                                                    <option value="66" />Basic - $2.99/month (USD)
                                                    <option value="67" />Pro - $9.99/month (USD)
                                                    <option value="68" />Premium - $49.99/month (USD)
                                                </select>
                                            </div>
                                            <div class="field-box">
                                                <label>Credit Card Number:</label>
                                                <input class="span5" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Expiration:</label>
                                                <input style="width:60px;" placeholder="MM" type="text" />
                                                &nbsp; / &nbsp;
                                                <input style="width:85px;" placeholder="YYYY" type="text" />
                                            </div>
                                            <div class="field-box">
                                                <label>Card CVC Number:</label>
                                                <input class="span4" type="text" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wizard-actions">
                            <button type="button" disabled="" class="btn-glow primary btn-prev">
                                <i class="icon-chevron-left"></i> Prev
                            </button>
                            <button type="button" class="btn-glow primary btn-next" data-last="Finish">
                                Next <i class="icon-chevron-right"></i>
                            </button>
                            <button type="button" class="btn-glow success btn-finish">
                                Setup your account!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
/* eslint-disable */
let dom = null
export default{
data(){
	return{
	  devices:[{
	    id:1,
	    name:'设备1',
	  },{
	    id:2,
	    name:'设备2',
	  },{
	    id:3,
	    name:'设备3',
	  },{
	    id:4,
	    name:'设备4',
	  }],
	  components:[{
	    id:1,
	    name:'组件1',
	  },{
	    id:2,
	    name:'组件2',
	  },{
	    id:3,
	    name:'组件3',
	  },{
	    id:4,
	    name:'组件4',
	  }],
	  peopledata:[{
	    id:1,
	    name:'xy1',
	  },{
	    id:2,
	    name:'xy2',
	  },{
	    id:3,
	    name:'xy3 ',
	  },{
	    id:3,
	    name:'xy4',
	  }]
    }
},
mounted: function(){
	this.$nextTick(function () {
    	var $wizard = $('#fuelux-wizard'),
	        $btnPrev = $('.wizard-actions .btn-prev'),
	        $btnNext = $('.wizard-actions .btn-next'),
	        $btnFinish = $(".wizard-actions .btn-finish");

	    $wizard.wizard().on('finished', function(e) {
	        // wizard complete code
	    }).on("changed", function(e) {
	        var step = $wizard.wizard("selectedItem");
	        // reset states
	        $btnNext.removeAttr("disabled");
	        $btnPrev.removeAttr("disabled");
	        $btnNext.show();
	        $btnFinish.hide();

	        if (step.step === 1) {
	            $btnPrev.attr("disabled", "disabled");
	        } else if (step.step === 4) {
	            $btnNext.hide();
	            $btnFinish.show();
	        }
	    });

	    $btnPrev.on('click', function() {
	        $wizard.wizard('previous');
	    });
	    $btnNext.on('click', function() {
	        $wizard.wizard('next');
	    });


	    //树
	    var zTreeObj;
	   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
		var setting = {};
	   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
		var zNodes = [
	    {name:"test1", open:true, children:[
	    {name:"test1_1"}, {name:"test1_2"}]},
	    {name:"test2", open:true, children:[
	    {name:"test2_1"}, {name:"test2_2"}]}
	    ];
	    $(document).ready(function(){
	    	zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
	    });
    })

},
methods: {
drag:function(event){
	event=event||window.event;
	event.dataTransfer.effectAllowed = 'all';
	dom = event.currentTarget;
	//alert(dom);

},
drop:function(event){
	event=event||window.event;
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
    event.target.appendChild(dom);
},
allowDrop:function(event){
  event.preventDefault();
},
}
}

</script>
<style>
.drag-content {
    border: 2px solid rgba(204, 204, 204, 1);
    min-height: 350px;
}
.choice {
    border-right: 2px solid rgba(204, 204, 204, 1);

}
.move{
	min-height: 350px;
}


.select-device {
  background-color: #C4E1E1;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
  cursor:pointer;
  padding: 6px 20px;
  color: #4F4F4F;
}
.select-comp {
  background-color: #DEFFAC;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
  margin: 10px;
  cursor:pointer;
  padding: 6px 20px;
  color: #4F4F4F;
}

 .cursored{
  cursor: default;
}
.project-content,.people-content {
    margin: 30px 50px;
}
.people-content {
    margin-top: 30px;
}
.drag-div {
    border: 1px solid #5bc0de;
    padding:10px;
    margin-bottom: 10px;
    width: 800px;
    cursor: pointer;
}
.select-project-item {
    display: inline-block;
    text-align: center;
    border-radius: 3px;
}
.drag-people-label{
  margin-bottom:0;
  padding-right:10px;
}
</style>
