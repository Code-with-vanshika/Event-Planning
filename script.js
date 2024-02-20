document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        events: [
            // Fetch events from a backend or provide a static array of events
        ],
        dateClick: function(info) {
            var modal = document.getElementById('eventModal');
            modal.style.display = "block";

            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = "none";
            }

            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            document.getElementById('eventForm').onsubmit = function() {
                var eventName = document.getElementById('eventName').value;
                var eventDate = moment(document.getElementById('eventDate').value).format('YYYY-MM-DD');
                calendar.addEvent({
                    title: eventName,
                    start: eventDate
                });
                modal.style.display = "none";
                return false;
            }
        }
    });
    calendar.render();
});