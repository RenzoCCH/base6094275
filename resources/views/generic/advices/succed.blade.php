 @if(Session::has('message'))
      <div class="advice success">
           <ul class="list-unstyled">
                   <li> {{ Session::get('message') }}</li>
           </ul>
      </div>
 @endif
 @if(Session::has('edit_success'))
     <div class="advice success">
          <ul class="list-unstyled">
                  <li> {{ Session::get('edit_success') }}</li>
          </ul>
     </div>
 @endif
