import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    var lang = {
      html: "100%",
      css: "90%",
      javascript: "70%",
      php: "55%",
      angular: "65%"
    };

    var multiply = 4;

    $.each(lang, function(language, pourcent) {
      var delay = 700;

      setTimeout(function() {
        $("#" + language + "-pourcent").html(pourcent);
      }, delay * multiply);

      multiply++;
    });
  }
}
