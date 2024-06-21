### Increase maxTextureArrayLayers limit

The maximum allowed value for the depth or layer count of a 2D texture is 256 by default. It's now possible to request up to 2048 by using the maxTextureArrayLayers limit when supported. See the following example and issue 42241514.

![Sample Image](/notes/what-is-new-in-webgpu/images/thumbnail.png)

### Buffer upload optimization for Vulkan backend

A fast path is now available when calling the writeBuffer() method of the GPUQueue for Vulkan backend. The data may now be written directly into the destination buffer, eliminating the need for an extra copy and synchronization. This optimization reduces memory traffic needed to upload data to the GPU.

The fast path optimization requires the buffer's memory to be host visible and without any pending GPU operations on it. See issue 42242084.

### Shader compilation time improvements

The Chrome team is enhancing the efficiency of Tint, the compiler of WebGPU shader language. Tint currently modifies the shader code's abstract syntax tree (AST) multiple times before generating machine code, a process that has been resource-intensive on some platforms. To optimize this, a new intermediate representation (IR) is being introduced, along with redesigned backends that use it. This change aims to accelerate shader compilation.

![Sample Image](/notes/what-is-new-in-webgpu/images/render-pipeline-creation-diagram.jpg)

These improvements, already accessible on Android, are being progressively expanded to ChromeOS devices that support WebGPU with the Vulkan backend. See issue 42250751.

### Submitted command buffers must be unique

Each GPUCommandBuffer submitted to the GPUQueue with the submit() method must be unique, otherwise a validation error is generated. This was a specification bug. See issue 42241492.

### Dawn updates

The C++ wrapper webgpu_cpp.h is now header-only, simplifying its use and enabling easier integration with alternative C++ wrappers. See issue 40195122.

The webgpu.h C API no longer exposes the notion of Swapchain objects. This change is to closely align with the JavaScript API. The internal configuration is now done through the Configure() method of the new wgpu::Surface object, which is subject to future modifications. Check out an example in the Build an app with WebGPU documentation. See issue 42241264.

Check out the exhaustive list of commits.
