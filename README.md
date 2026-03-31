# WEB103 Prework - *Creatorverse*

Submitted by: **👉🏿 your name here**

About this web app: **Creatorverse is a full-stack app that lets you manage your favorite content creators. You can view, add, edit, and delete creators — each with a name, channel URL, description, and optional image.**

Time spent: **👉🏿 5** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Dark mode UI with purple/pink gradient theme
* [x] Sticky frosted-glass navbar
* [x] Live image preview when adding/editing a creator
* [x] Loading spinner while fetching data
* [x] Empty state with call-to-action when no creators exist
* [x] Danger Zone section on the edit page for deleting creators
* [x] Hover animations on cards (lift + image zoom)
* [x] Card image placeholder when no image URL is provided

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ... 👉🏿 [Kap](https://getkap.co/) for macOS
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- Supabase RLS (Row Level Security) must be disabled on the `creators` table for the app to read and write data.
- The `creators` table requires an `id` primary key column for routing to individual creator pages.
- Image URLs are optional — a placeholder icon is shown when no image is provided.

## License

Copyright 2024 👉🏿 your name here

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
