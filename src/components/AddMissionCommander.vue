<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mission Commander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missionCommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="missionCommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="missionCommander.mainStack"
          name="mainStack"
        />
      </div>
      <div class="form-group">
        <label for="title">Current Enrollment</label><br>
        <input type="radio" id="false" value="false" v-model="currentEnrollmentPicked">
        <label for="false">&nbsp;False</label>
        <br>
        <input type="radio" id="true" value="true" v-model="currentEnrollmentPicked">
        <label for="true">&nbsp;True</label>
        <br>
      </div>
      <div class="form-group">
        <label for="title">Has Azure Certification</label><br>
        <input type="radio" id="falseCertification" value="false" v-model="hasAzureCertificationPicked">
        <label for="falseCertification">&nbsp;False</label>
        <br>
        <input type="radio" id="trueCertification" value="true" v-model="hasAzureCertificationPicked">
        <label for="trueCertification">&nbsp;True</label>
        <br>
      </div>
      <button @click="saveMissionCommander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission Commander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMissionCommander">Add</button>
    </div>
  </div>
</template>

<script>
import MissionCommanderService from "../services/MissionCommanderService";
export default {
  name: "add-mission-commander",
  data() {
    return {
      missionCommander: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
        currentEnrollment: false,
        hasAzureCertification: false
      },
      submitted: false,
      currentEnrollmentPicked: "false",
      hasAzureCertificationPicked: "false"
    };
  },
  methods: {
    saveMissionCommander() {
      var data = {
        name: this.missionCommander.name,
        username: this.missionCommander.username,
        mainStack: this.missionCommander.mainStack,
        currentEnrollment: this.stringToBoolean(this.currentEnrollmentPicked),
        hasAzureCertification: this.stringToBoolean(this.hasAzureCertificationPicked)
      };
      MissionCommanderService.create(data)
        .then(response => {
          this.missionCommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMissionCommander() {
      this.submitted = false;
      this.missionCommander = {};
    },
    stringToBoolean: function(string){
    alert(string.toString().toLowerCase())
      switch(string.toString().toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
      }
    }
  }
};
</script>
