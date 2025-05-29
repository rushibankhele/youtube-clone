

- Header
    - Body
        - Sidebar
            - MenuItems
        - MainContainer
            - ButtonList 
            - Video Container
                - VideoCard 


- Higher Order COmponents
    - which takes a one component as parameter and return a new component 
    - like in youtube app we have multiple video cards but we have also the advertisement cards also it is one of good example of Higher order component

- Debouncing

    - Typing slow - 150 ms
    - Typing Fast - 30 ms

    Performance 
    - if the user is typing on search bar then in suggestion user is getting some data and the difference between each keystoke is debouncing concept.
    - if the difference between 2 key stroke is < 200ms Decline API call
    - if the > 200ms Then make an API CALL
