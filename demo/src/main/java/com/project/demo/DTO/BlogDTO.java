package com.project.demo.DTO;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BlogDTO {
    private String title;
    private String content;
    private String excerpt;
    private String image;
    private Long authorId;
}
