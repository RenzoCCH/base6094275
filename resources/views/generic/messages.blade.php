<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 nopadding-xs messages" ng-controller="messagesController">
	<div class="fadein alert">
    <strong  id="messageAdvice"></strong>
    <span id="messageContent"  data-mode="@if(Session::has('message_cancel.mode')){{Session::get('message_cancel.mode')}} @elseif(count($errors) > 0)warning @else success @endif">
    @if(Session::has('message')){{ Session::get('message') }}@endif
    @if(count($errors) > 0)
       @foreach ($errors->all() as $error)
           {{ $error }}<br/>
       @endforeach
    @endif
    </span>
    {{-----------------------the url of cancel will always be on put cation--------------------------------}}
    <span id="messageCancel" class='messages-cancel' ng-click='cancelAction()' data-cancel="@if(Session::has('message_cancel.cancel')){{Session::get('message_cancel.cancel')}}@endif">
    Cancel
    </span>
  </div>
</div>

