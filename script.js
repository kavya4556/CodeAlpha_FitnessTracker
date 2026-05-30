let activities = JSON.parse(
    localStorage.getItem("activities")
) || [];

displayActivities();

function addActivity(){

    let exercise =
        document.getElementById("exercise").value;

    let duration =
        document.getElementById("duration").value;

    let calories =
        document.getElementById("calories").value;

    if(
        exercise === "" ||
        duration === "" ||
        calories === ""
    ){
        alert("Please fill all fields");
        return;
    }

    let activity = {
        exercise,
        duration,
        calories
    };

    activities.push(activity);

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

    displayActivities();

    document.getElementById("exercise").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("calories").value = "";
}

function displayActivities(){

    let list =
        document.getElementById("activityList");

    list.innerHTML = "";

    let totalCalories = 0;
    let totalDuration = 0;

    activities.forEach(activity => {

        let li =
            document.createElement("li");

        li.innerHTML =
            "🏃 " +
            activity.exercise +
            " | " +
            activity.duration +
            " mins | " +
            activity.calories +
            " calories";

        list.appendChild(li);

        totalCalories +=
            Number(activity.calories);

        totalDuration +=
            Number(activity.duration);
    });

    document.getElementById("workouts")
        .innerText = activities.length;

    document.getElementById("totalCalories")
        .innerText = totalCalories;

    document.getElementById("totalDuration")
        .innerText = totalDuration;
}function clearData(){

    localStorage.removeItem("activities");

    activities = [];

    displayActivities();
}