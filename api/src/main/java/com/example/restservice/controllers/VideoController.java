package com.example.restservice.controllers;

import com.example.restservice.resources.VideoWithURL;
import com.example.restservice.repositories.VideoRepository;
import com.example.restservice.resources.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/video")
public class VideoController {

    @Autowired
    private VideoRepository videoRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public List<VideoWithURL> getAllVideos() {
        List<VideoWithURL> allVideosWithURL = new ArrayList<VideoWithURL>();
        List<Video> allVideos = videoRepository.findAll();
        for (Video video : allVideos) {
            allVideosWithURL.add(new VideoWithURL(video));
        }
        return allVideosWithURL;
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/")
    public Video addVideo() {
        Video video = new Video("Test", "Desc Test", "Uploader");
        videoRepository.saveAndFlush(video);
        return video;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public List<VideoWithURL> getVideo(@PathVariable UUID id){
        List<VideoWithURL> videoWithURL = new ArrayList<VideoWithURL>();
        Optional<Video> result = videoRepository.findById(id);

        if(result.isPresent()){
            result.ifPresent(video -> {
                videoWithURL.add(new VideoWithURL(video));
            });
        }
        return videoWithURL;
    }
}
