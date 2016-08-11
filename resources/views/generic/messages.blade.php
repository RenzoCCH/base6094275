<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding-xs messages" ng-controller="messagesController">
	<div class="fadein alert">
    <strong  id="messageAdvice"></strong>
    <span id="messageContent" >@if(Session::has('message')){{ Session::get('message') }}@endif</span>
    {{-----------------------the url of cancel will always be on put cation--------------------------------}}
    <span id="messageCancel" class='messages-cancel' ng-click='cancelAction()'>
    Cancel
    </span>
  </div>
</div>

