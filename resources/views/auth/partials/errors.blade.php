 @if(count($errors) > 0)
    <div class="alert alert-warning list-group">
         <ul>
             @foreach ($errors->all() as $error)
                 <li>{{ $error }}</li>
             @endforeach
         </ul>
    </div>
 @endif
