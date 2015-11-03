 @if(Session::has('message'))
      <div class="alert alert-success list-group">
           <ul>
                   <li> {{ Session::get('message') }}</li>
           </ul>
      </div>
 @endif
 @if(Session::has('edit_success'))
     <div class="alert alert-success list-group">
          <ul>
                  <li> {{ Session::get('edit_success') }}</li>
          </ul>
     </div>
 @endif
