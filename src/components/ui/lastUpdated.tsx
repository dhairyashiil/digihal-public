import client from "@/db";

// Fetch last updated date from the database
async function getLastUpdatedDateTime() {
    const updatedRecord = await client.lastUpdated.findFirst();
    return updatedRecord?.lastUpdated;
}

// Component to display the last updated date and time
async function LastUpdated() {
    const lUDateTime = await getLastUpdatedDateTime();

    if (!lUDateTime) {
        return (
            <div className="pr-5 sm:pr-8 md:pr-12 lg:pr-20 xl:pr-28 pt-3 text-white text-xs font-thin italic text-right">
                Loading...
            </div>
        );
    }

    // Convert the date to UTC
    const utcDate = new Date(lUDateTime.toISOString());

    // Extract date and time from utcDate
    const dateString = utcDate.toLocaleDateString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
    });

    // Convert time to 24-hour format and then to 12-hour format
    const timeString24Hour = utcDate.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' });
    const timeString12Hour = convert24HourTo12Hour(timeString24Hour);

    return (
        <div className="pr-5 sm:pr-8 md:pr-12 lg:pr-20 xl:pr-28 pt-3 text-white text-xs font-thin italic text-right">
            Data Last Updated on {dateString} at {timeString12Hour} 
        </div>
    );
}

// Function to convert 24-hour time to 12-hour format
function convert24HourTo12Hour(timeString: string): string {
    let [hours, minutes, seconds] = timeString.split(':');
    let period = 'AM';

    let hoursNumber = parseInt(hours); // Convert hours to a number

    if (hoursNumber > 12) {
        hoursNumber -= 12;
        period = 'PM';
    } else if (hoursNumber === 0) {
        hoursNumber = 12;
    } else if (hoursNumber === 12) {
        period = 'PM';
    }

    // Return the formatted string with the modified hours
    return `${hoursNumber}:${minutes}:${seconds} ${period}`;
}

export default LastUpdated;
