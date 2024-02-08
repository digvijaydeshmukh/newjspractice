@ViewChild('carSearchInput') carInput: ElementRef;

cars: any = [];
showSearches: boolean = false;
isSearching: boolean = false;
searchedCars: any = [];

constructor() {
  this.cars = [
    'Audi',
    'BMW',
    'Bugatti',
    'Ferrari',
    'Ford',
    'Lamborghini',
    'Mercedes Benz',
    'Porsche',
    'Rolls-Royce',
    'Volkswagen',
  ];
}

ngOnInit() {
  this.carSearch();
}

getCars(name): Observable<any> {
  console.log('name', of(this.filterCars(name)));
  return of(this.filterCars(name));
}

filterCars(name) {
  return this.cars.filter(
    (val) => val.toLowerCase().includes(name.toLowerCase()) == true
  );
}

carSearch() {
  console.log('hiii');
  // Adding keyup Event Listerner on input field
  const search$ = fromEvent(this.carInput.nativeElement, 'keyup').pipe(
    map((event: any) => event.target.value),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap((term) => {
      console.log('jjj', term);
      return this.getCars(term);
    })
  );

  search$.subscribe((data) => {
    console.log('data', data);
    if (data.length != 0) {
      this.isSearching = false;
      this.searchedCars = data;
    } else {
      this.isSearching = false;
      this.searchedCars = ['No data found'];
    }
  });
}

// setCarName(name) {
//   this.searchedCars = this.filterCars(name);
//   console.log(this.searchedCars);
//   // this.setcarNameEvent.emit({name});
//   // this.carSearchInput.nativeElement.value = name;
//   this.showSearches = false;
// }

trackById(index, item): void {
  return item._id;
}


<div class="card container">
  <div class="label">
    <label for="car">Search Car:</label>
  </div>
  <div>
    <input
      id="car"
      #carSearchInput
      placeholder="Search Car By Name"
      class="form-control"
      type="text"
      (keyup)="carSearch()"
    />
  </div>
  <!--  DropDown Starts  -->
  <div class="card">
    <div class="search">
      <div *ngFor="let car of searchedCars; trackBy: trackById">
        <ul>
          <li>{{ car }}</li>
        </ul>
      </div>
    </div>
  </div>